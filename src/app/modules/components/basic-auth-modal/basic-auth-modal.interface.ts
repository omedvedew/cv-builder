export interface BasicAuthModalProps {
  onSubmit: (values: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => void;
  onClose?: () => void;
}
