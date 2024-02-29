import { Field, Form, Formik } from 'formik';
import { FilterFormSchema } from './FilterFormSchema';
import styles from './FilterForm.module.scss';

export const FilterForm = () => (
  <div className={styles.FilterForm__container}>
    <h1>Фильтр</h1>
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
      render={({ errors, touched }) => (
        <Form className="form-container">
          <label htmlFor="email">Цена</label>
          <Field
            name="price"
            placeholder="10"
            type="text"
          />

          {errors.price && touched.price && <div className="field-error">{errors.price}</div>}

          <label htmlFor="product">Наименование</label>
          <Field
            name="product"
            placeholder="Кольцо"
            type="text"
          />

          {errors.product && touched.product && <div className="field-error">{errors.product}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    />
  </div>
);
