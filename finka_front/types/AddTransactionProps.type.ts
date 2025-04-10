import {ButtonProps} from "@/types/ButtonProps.type";
import {ButtonWithValuesProps} from "@/types/ButtonWithValuesProps.type";

export type AddTransactionProps = {
  title: string;
  data?: any;
  buttons: {
    left: ButtonWithValuesProps;
    right: ButtonProps;
  };
};
