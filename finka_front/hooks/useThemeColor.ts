/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { ColorsConst } from '@/constants/colors.const';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof ColorsConst.light & keyof typeof ColorsConst.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return ColorsConst[theme][colorName];
  }
}
