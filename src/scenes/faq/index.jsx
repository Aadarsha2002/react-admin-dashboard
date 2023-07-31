import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>An important answer</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Another important answer</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Yet another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yet another important answer</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Penultimate important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Penultimate important answer</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Final important answer</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
