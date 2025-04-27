import {ButtonProps} from "@/types/ButtonProps.type";

export type AddTransactionProps = {
  title: string;
  data?: any;
  buttons: {
    left: ButtonProps;
    right: ButtonProps;
  };
};
