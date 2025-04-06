export type AddTransactionProps = {
  title: string;
  data: {
    name: string;
    value?: string | number;
    editable?: boolean;
  }[];
  buttons: {
    left: {
      title: string;
      onPress: () => void;
    };
    right: {
      title: string;
      onPress: () => void;
    };
  };
};