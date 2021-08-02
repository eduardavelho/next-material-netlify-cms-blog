import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useTheme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import { isColorDark } from "../utils/is-color-dark";

export interface SearchHeaderProps {
  title?: string;
  titleColor?: string;
  background?: string;
  options: string[];
  value: string[];
  placeholder: string;
  noOptionsText: string;
  disabled: boolean;
  loading: boolean;
  onChange?: (value: string[]) => Promise<void>;
}

export function SearchHeader({
  title,
  titleColor,
  background,
  options,
  value,
  placeholder,
  noOptionsText,
  disabled,
  loading,
  onChange = async () => {},
}: SearchHeaderProps) {
  const backgroundIsDark = background ? isColorDark(background) : false;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const searchClasses = searchStyles({ backgroundIsDark });

  return (
    <Box
      style={{
        background: background || theme.palette.primary.main,
      }}
      height={isDesktop ? "394px" : "256px"}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      flexDirection="column"
    >
      <Box maxWidth="960px" minWidth={isDesktop ? "480px" : "100%"}>
        {title && (
          <Box marginBottom={1.6} marginX={isDesktop ? undefined : 1.6}>
            <Typography
              variant={isDesktop ? "h3" : "h5"}
              component="h1"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: titleColor || theme.palette.primary.contrastText,
              }}
            >
              {title}
            </Typography>
          </Box>
        )}
        <Box
          marginX={isDesktop ? undefined : 1.6}
          marginBottom={isDesktop ? 6.4 : 1.6}
        >
          <Autocomplete
            multiple
            disableCloseOnSelect
            blurOnSelect
            fullWidth
            openText=""
            clearText=""
            closeText=""
            loadingText=""
            classes={searchClasses}
            options={options}
            value={value}
            getOptionLabel={(option) => option}
            loading={loading}
            disabled={loading || disabled}
            noOptionsText={noOptionsText}
            popupIcon={
              loading ? (
                <CircularProgress color="inherit" size="1em" />
              ) : (
                <SearchIcon color="inherit" />
              )
            }
            onChange={(_, value) => {
              if (value === null) {
                onChange([]);
              } else if (Array.isArray(value)) {
                onChange(value);
              } else {
                onChange([value]);
              }
            }}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder={placeholder}
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
}

const searchStyles = makeStyles((theme) => ({
  inputRoot: {
    color: ({ backgroundIsDark }: { backgroundIsDark?: boolean }) =>
      backgroundIsDark ? theme.palette.common.white : "inherit",
    backgroundColor: ({ backgroundIsDark }: { backgroundIsDark?: boolean }) =>
      backgroundIsDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    "& .MuiInputBase-input::placeholder": {
      color: ({ backgroundIsDark }: { backgroundIsDark?: boolean }) =>
        backgroundIsDark ? theme.palette.common.white : "inherit",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiIconButton-label": {
      color: ({ backgroundIsDark }: { backgroundIsDark?: boolean }) =>
        backgroundIsDark ? "rgba(255, 255, 255, 0.42)" : "inherit",
    },
  },
}));
