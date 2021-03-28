import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useTheme } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";

export interface SearchHeaderProps {
  title: string;
  background?: string;
  searchOptions: string[];
  searchDefaultValue: string[] | string;
  searchPlaceholder: string;
  searchNoOptionsText: string;
  searchDisabled: boolean;
  loading: boolean;
  dark?: boolean;
  searchMultiple?: boolean;
  onSearchSelect?: (value: string[]) => Promise<void>;
}

export function SearchHeader({
  title,
  background,
  searchOptions,
  searchDefaultValue,
  searchPlaceholder,
  searchNoOptionsText,
  searchDisabled,
  loading,
  dark,
  searchMultiple = false,
  onSearchSelect = async () => {},
}: SearchHeaderProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const searchClasses = searchStyles({ dark });

  return (
    <Box
      style={{
        background: background ?? theme.palette.primary.main,
      }}
      height={isDesktop ? "394px" : "256px"}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      flexDirection="column"
    >
      <Box maxWidth="960px" minWidth={isDesktop ? "480px" : "100%"}>
        <Box marginBottom={1.6} marginX={isDesktop ? undefined : 1.6}>
          <Typography
            variant={isDesktop ? "h3" : "h5"}
            component="h1"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: dark ? theme.palette.common.white : undefined,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          marginX={isDesktop ? undefined : 1.6}
          marginBottom={isDesktop ? 6.4 : 1.6}
        >
          <Autocomplete
            multiple={searchMultiple}
            disableCloseOnSelect
            blurOnSelect
            fullWidth
            openText=""
            clearText=""
            closeText=""
            loadingText=""
            classes={searchClasses}
            options={searchOptions}
            defaultValue={
              searchMultiple
                ? Array.isArray(searchDefaultValue)
                  ? searchDefaultValue
                  : [searchDefaultValue]
                : Array.isArray(searchDefaultValue)
                ? searchDefaultValue[0] ?? undefined
                : searchDefaultValue
            }
            getOptionLabel={(option) => option}
            loading={loading}
            disabled={searchDisabled}
            noOptionsText={searchNoOptionsText}
            popupIcon={<SearchIcon color="inherit" />}
            onChange={(_, value) => {
              if (value === null) {
                onSearchSelect([]);
              } else if (Array.isArray(value)) {
                onSearchSelect(value);
              } else {
                onSearchSelect([value]);
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
                placeholder={searchPlaceholder}
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
    color: ({ dark }: { dark?: boolean }) =>
      dark ? theme.palette.common.white : "inherit",
    backgroundColor: ({ dark }: { dark?: boolean }) =>
      dark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiIconButton-label": {
      color: ({ dark }: { dark?: boolean }) =>
        dark ? theme.palette.common.white : "inherit",
    },
  },
}));
