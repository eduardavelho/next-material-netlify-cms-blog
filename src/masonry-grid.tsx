import React from "react";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Masonry from "react-masonry-css";

export interface MasonryGridProps {
  children: React.ReactNode;
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  spacing?: number;
}

export function MasonryGrid({
  children,
  xl = 4,
  lg = 3,
  md = 2,
  sm = 1,
  xs = 1,
  spacing = 0,
}: MasonryGridProps) {
  const theme = useTheme();
  const styles = useStyles({ spacing });

  return (
    <div className={styles.root}>
      <Masonry
        className="masonry-grid"
        columnClassName="masonry-grid-column"
        breakpointCols={{
          default: xl,
          [theme.breakpoints.values.xl]: xl,
          [theme.breakpoints.values.lg]: lg,
          [theme.breakpoints.values.md]: md,
          [theme.breakpoints.values.sm]: sm,
          [theme.breakpoints.values.xs]: xs,
        }}
      >
        {children}
      </Masonry>
    </div>
  );
}

type SpacingProps = {
  spacing: number;
};

const useStyles = makeStyles({
  root: {
    "& .masonry-grid": {
      marginLeft: ({ spacing }: SpacingProps) => spacing * -1,
      display: "flex",
    },
    "& .masonry-grid-column": {
      paddingLeft: ({ spacing }: SpacingProps) => spacing,
    },
    "& .masonry-grid-column > div": {
      marginBottom: ({ spacing }: SpacingProps) => spacing,
    },
  },
});
