import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SkillBodyT } from "../page";
import Image from "next/image";
import styled from "@emotion/styled";

const AccordionContainer = styled.div`
  width: 90%;
`;

export default function BasicAccordion({ skill }: { skill: SkillBodyT }) {
  return (
    <AccordionContainer>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Image src={skill.src} alt={skill.title} width={20} height={20} />
          &nbsp;
          <Typography>{skill.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{skill.body}</Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionContainer>
  );
}
