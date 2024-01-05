import { TNormalElementProps } from '../../../lib/types';

interface IProps extends TNormalElementProps<HTMLLabelElement> {
  htmlFor:
    | 'userPassword'
    | 'userEmail'
    | 'userName'
    | 'userConfirmPassword'
    | 'postalCode'
    | 'address'
    | 'specificAddress'
    | 'referenceItem'
    | 'prodcutDescription'
    | 'productName';

}

/**
 * Responsible for making Basic Atoms label of input
 *
 * - Responsible for work as a label
 */
export default function Label({
  children,
  className = '',
  htmlFor,
  ...props
}: IProps) {
  return (
    <label {...props} htmlFor={htmlFor} className={`${className}  label`}>
      {children}
    </label>
  );
}
