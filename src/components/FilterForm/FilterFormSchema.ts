import * as Yup from 'yup';

export const FilterFormSchema = Yup.object().shape({
  price: Yup.number()
    .min(1, 'Значение ниже минимального допустимого')
    .max(999999999999, 'Значение выше максимального допустимого')
    .positive('Значение должно быть положительным')
    .integer('Значение должно быть целочисленным'),
  product: Yup.string().max(40, 'Длина должна быть меньше 40 символов')
});
