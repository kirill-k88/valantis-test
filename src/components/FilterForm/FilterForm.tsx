import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, FC, SetStateAction, useMemo, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { FilterFormSchema } from './FilterFormSchema';
import styles from './FilterForm.module.scss';
import { AppDispatch, RootStore } from '../../store/store';
import { fetchFiltredProducts, fetchIds } from '../../store/getProductLits';
import { setIsFilterd } from '../../store/isFilterdSlice';
import { IfilterList } from '../../utils/interfaces/api.interface';
import { PAGINATION_LIMIT } from '../../utils/constants/constants';

interface IPopupFormProps {
  setCurPage: Dispatch<SetStateAction<number>>;
}

export const FilterForm: FC<IPopupFormProps> = ({ setCurPage }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { brands } = useSelector((store: RootStore) => store.getProductBrandsReducer);
  const [filterType, setFilterType] = useState(0);

  const getBrands = useMemo(() => {
    return brands.map(b => {
      return b ? (
        <option
          key={b}
          value={b}>
          {b}
        </option>
      ) : (
        ''
      );
    });
  }, [brands]);

  const onSubmitHandle = (values: IfilterList) => {
    setCurPage(0);
    const value =
      filterType === 1
        ? { brand: values.brand }
        : filterType === 2
        ? { price: values.price }
        : filterType === 3
        ? { product: values.product }
        : {};
    if (filterType === 0) {
      dispatch(setIsFilterd({ isFilterd: false }));
      dispatch(fetchIds({ offset: 0 * PAGINATION_LIMIT }));
    } else {
      dispatch(setIsFilterd({ isFilterd: true }));
      dispatch(fetchFiltredProducts({ filter: value }));
    }
  };

  const backgroundClickHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const filterSelectorHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectVal = e.target.value;
    setFilterType(Number(selectVal));
  };

  return (
    <div
      className={styles.filterform}
      onClick={backgroundClickHandle}>
      <div className={styles.filterform__filtertype}>
        <p className={styles.filterform__filtertypecaption}>Фильтр по</p>
        <select
          className={styles.filterform__filtertypeselect}
          onChange={filterSelectorHandle}>
          <option value="0">без фильтра</option>
          <option value="1">марке</option>
          <option value="2">цене</option>
          <option value="3">товару</option>
        </select>
      </div>
      <Formik
        initialValues={{
          price: 1,
          product: ''
        }}
        validationSchema={FilterFormSchema}
        onSubmit={onSubmitHandle}>
        {({ errors, touched }) => (
          <Form className={styles.filterform__form}>
            {filterType === 1 && (
              <>
                <label
                  htmlFor="brand"
                  className={styles.filterform__label}>
                  Марка
                </label>

                <Field
                  as="select"
                  name="brand"
                  className={styles.filterform__select}
                  disabled={filterType !== 1}>
                  <option value=""></option>
                  {getBrands}
                </Field>

                {errors.brand && touched.brand && (
                  <div className={styles.filterform__fielderror}>{errors.brand}</div>
                )}
              </>
            )}
            {filterType === 2 && (
              <>
                <label
                  htmlFor="price"
                  className={styles.filterform__label}>
                  Цена
                </label>
                <Field
                  name="price"
                  placeholder="10"
                  type="number"
                  className={styles.filterform__field}
                  disabled={filterType !== 2}
                />

                {errors.price && touched.price && (
                  <div className={styles.filterform__fielderror}>{errors.price}</div>
                )}
              </>
            )}
            {filterType === 3 && (
              <>
                <label
                  htmlFor="product"
                  className={styles.filterform__label}>
                  Наименование
                </label>
                <Field
                  name="product"
                  placeholder="Кольцо"
                  type="text"
                  className={styles.filterform__field}
                  disabled={filterType !== 3}
                />

                {errors.product && touched.product && (
                  <div className={styles.filterform__fielderror}>{errors.product}</div>
                )}
              </>
            )}
            <button
              type="submit"
              className={styles.filterform__submit}>
              Применить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
