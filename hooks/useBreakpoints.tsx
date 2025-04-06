import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useBreakpoints = ({
  breakpoint,
  breakpointEnd = "xs",
  option = "up",
}: {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl";
  breakpointEnd?: "xs" | "sm" | "md" | "lg" | "xl";
  option?: "down" | "up" | "only" | "not" | "between";
}) => {
  const theme = useTheme();
  const matchesDown = useMediaQuery(theme.breakpoints.down(breakpoint));
  const matchesUp = useMediaQuery(theme.breakpoints.up(breakpoint));
  const matchesOnly = useMediaQuery(theme.breakpoints.only(breakpoint));
  const matchesNot = useMediaQuery(theme.breakpoints.not(breakpoint));
  const matchesBetween = useMediaQuery(
    theme.breakpoints.between(breakpoint, breakpointEnd),
  );

  switch (option) {
    case "down": {
      return { matches: matchesDown };
    }
    case "up": {
      return { matches: matchesUp };
    }
    case "only": {
      return { matches: matchesOnly };
    }
    case "not": {
      return { matches: matchesNot };
    }
    case "between": {
      return { matches: matchesBetween };
    }
    default:
      break;
  }

  return { matches: false };
};
