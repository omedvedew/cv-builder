export interface LoginModalProps {
  onSubmit: (values: { email: string; password: string }) => void;
  onClose?: () => void;
}
