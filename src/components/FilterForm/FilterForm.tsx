import { useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { FilterFormSchema } from './FilterFormSchema';
import styles from './FilterForm.module.scss';
import { RootStore } from '../../store/store';
import { useMemo } from 'react';

export const FilterForm = () => {
  const { brands } = useSelector((store: RootStore) => store.getProductBrandsReducer);

  const getBrands = useMemo(() => {
    return brands.map(b => {
      return b ? (
        <option key={b} value={b}>
          {b}
        </option>
      ) : (
        ''
      );
    });
  }, [brands]);

  const backgroundClickHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.filterform} onClick={backgroundClickHandle}>
      <Formik
        initialValues={{
          price: '',
          product: ''
        }}
        validationSchema={FilterFormSchema}
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.filterform__form}>
            <label htmlFor="brand" className={styles.filterform__label}>
              Бренд
            </label>

            <Field as="select" name="brand" className={styles.filterform__select}>
              <option value="--">--</option>
              {getBrands}
            </Field>

            <label htmlFor="email" className={styles.filterform__label}>
              Цена
            </label>
            <Field name="price" placeholder="10" type="text" className={styles.filterform__field} />

            {errors.price && touched.price && (
              <div className={styles.filterform__fielderror}>{errors.price}</div>
            )}

            <label htmlFor="product" className={styles.filterform__label}>
              Наименование
            </label>
            <Field
              name="product"
              placeholder="Кольцо"
              type="text"
              className={styles.filterform__field}
            />

            {errors.product && touched.product && (
              <div className={styles.filterform__fielderror}>{errors.product}</div>
            )}

            <button type="submit" className={styles.filterform__submit}>
              Применить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
