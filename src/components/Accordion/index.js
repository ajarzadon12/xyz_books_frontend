import React from "react";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = makeStyles((theme)=> (
  {
    root: {
      "&.MuiAccordion-root:before": {
        boxShadow: "none",
        backgroundColor: "#F3F5F8",
      },
      "&.MuiAccordion-root": {
        boxShadow: "none",
      },
    }
  }
));

const Accordion = (props) => {
  const {
    summary = '',
    moreText = '',
    expanded = false,
    summaryClassname,
    moreTextClassname,
    iconClassname,
    onChange,
  } = props;

  const classes = styles();

  return (
    <MuiAccordion expanded={expanded} onChange={onChange} classes={{ root: classes.root }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={iconClassname} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={summaryClassname}
        >
          <div>
            {summary}
          </div>
        </AccordionSummary>
        <AccordionDetails className={moreTextClassname}>
          <div>
            {moreText}
          </div>
        </AccordionDetails>
      </MuiAccordion>
  );
};

export default Accordion;
