export type ButtonProps = {
  title: string,
  onPress?: () => void,
  fetchData?: (value: any) => Promise<any>,
};
