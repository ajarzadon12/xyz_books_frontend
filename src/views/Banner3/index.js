import React from "react";
import { map } from 'lodash';

import Accordion from 'src/components/Accordion';

const Banner3 = (props) => {
  const [expanded, setExpanded] = React.useState(0);

  const faqs = [
    {
      id: 1,
      summary: 'Dedicated customer support and help portal.',
      moreText: 'With our dedicated customer support team, you can rest easy knowing that we’re doing everything we can to save you time, money, and stress.',
    },
    {
      id: 2,
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
      moreText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      id: 3,
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
      moreText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      id: 4,
      summary: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
      moreText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
  ];

  const handleChange = (id, isExpanded) => {
    setExpanded(isExpanded ? id : 0);
  };

  return (
    <div className="banner3__container">
      <div className="main-title">
        Frequently Asked Question
      </div>
      <div className="faqs-container">
        {
          map(faqs, (faq) => {
            const { id, ...otherProps } = faq;
            return (
              <Accordion
                expanded={expanded === id}
                summaryClassname="faqs-summary"
                moreTextClassname="faqs-moretext"
                iconClassname="faqs-icon"
                onChange={(_, isExpanded) => handleChange(id, isExpanded)}
                {...otherProps}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default Banner3;
