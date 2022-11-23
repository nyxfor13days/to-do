export type Colors = {
  background: string;
  onBackground: string;
  primary: string;
};

export type IconButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
};

export type ItemProps = {
  id: number;
  text: string;
  checked: boolean;
};
