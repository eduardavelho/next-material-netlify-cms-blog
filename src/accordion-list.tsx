import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTheme } from "@material-ui/core/styles";
import { markdownStyles } from "./markdown-styles";

export interface AccordionListProps {
  items: {
    header: React.ReactNode;
    htmlContent: string;
    footer?: React.ReactNode;
  }[];
  expandIconAriaLabel: string;
}

export function AccordionList({
  items,
  expandIconAriaLabel,
}: AccordionListProps) {
  const theme = useTheme();
  const markdownClasses = markdownStyles();

  return (
    <Box>
      {items.map(({ header, htmlContent, footer }, index) => (
        <Accordion key={`accordion-item-${index}`}>
          <AccordionSummary
            style={{
              paddingLeft: theme.spacing(1.5),
              paddingRight: theme.spacing(1.5),
            }}
            expandIcon={
              <Box paddingRight={{ sm: 0, md: 1 }}>
                <ExpandMoreIcon />
              </Box>
            }
            aria-controls={expandIconAriaLabel}
          >
            {header}
          </AccordionSummary>
          <AccordionDetails
            style={{
              paddingLeft: theme.spacing(1.5),
              paddingRight: theme.spacing(1.5),
            }}
          >
            <Box
              paddingRight={{ sm: 0, md: 8 }}
              paddingBottom={{ sm: 0, md: 2 }}
            >
              <Box
                paddingRight={{ sm: 0, md: 8 }}
                paddingBottom={{ sm: 0, md: 2 }}
              >
                <div
                  className={markdownClasses.markdown}
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
                {footer !== undefined && (
                  <Box flexWrap="wrap" display="flex" marginTop={2}>
                    {footer}
                  </Box>
                )}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
