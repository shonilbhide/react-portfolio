import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/School";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";

export const Timeline = () => {
  const linecolor = "#fcfcfc";

  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"August 2023 - May 2025"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Master of Computer Science
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              North Carolina State University, Raleigh, NC
            </h4>
            <p data-aos="fade-right">GPA: 4/4</p>
            <p data-aos="fade-right">
              Coursework: Machine Learning on Graphs, Neural Networks and Deep
              Learning, Software Engineering, Object Oriented Design and
              Development, Design and Analysis of Algorithms, Human-Computer
              Interaction.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"June 2017 - July 2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Bachelor of Technology in Computer Science
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Maharashtra Institute of Technology, Pune
            </h4>
            <p data-aos="fade-right">GPA: 9.97/10</p>
            <p data-aos="fade-right">
              Coursework: Data Structures, Advanced Machine Learning Algorithms,
              Artificial Intelligence, Big Data Analytics, Data Warehousing and
              Data Mining, Design and Analysis of Algorithms, Cognitive
              Computing, and Natural Language Processing.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"September 2021 - July 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Analyst
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Deloitte Consulting
            </h4>
            <p data-aos="fade-right">
              Developed and implemented scalable data pipelines for automating
              ETL process using PySpark, Pandas and Jenkins for 17+ Walmart
              reports, leveraging Google Cloud Services (BigQuery) for data
              retrieval, increasing overall efficiency by 12%.
            </p>
            <p data-aos="fade-right">
              Utilized data analysis and visualization techniques to support
              various consulting projects, including identifying trends and
              patterns in client data to inform decision-making.
            </p>
            <p data-aos="fade-right">
              Directed critical AWS Glue jobs for Vanguard's high-stakes DB
              migration (20M daily trades) and configured key AWS resources like
              EC2, Aurora, DynamoDB, SNS, and CloudFront, maintaining
              professional validation and security measures.
            </p>
            <p data-aos="fade-right">
              Collaborated in cross-functional teams to develop high-impact data
              solutions using Agile methodologies.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"January 2021 - May 2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Research AI/ML Intern
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Centre for Development of Advanced Computing India
            </h4>
            <p data-aos="fade-right">
              Engineered an entity matching framework, enhancing pre-trained
              Deep Learning architecture (DeepMatcher) with hybrid attribute
              summarization, and word-level embeddings, and created a novel
              Blocking algorithm, reducing redundant comparisons by 90%.
            </p>
            <p data-aos="fade-right">
              Built a graph-based entity linking system on Neo4j (using Graph
              algorithms and Graph queries). This system can be accessed by the
              user from a website designed in JavaScript that provides options
              for data filtering and visualizations.
            </p>
            <p data-aos="fade-right">
              Presented research findings at the 5th World Conference on Smart
              Trends in Systems, Security and Sustainability (WorldS4 2021) and
              published in Springer's LNNS journal series.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"March 2020 - June 2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Development Intern
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Whizible
            </h4>
            <p data-aos="fade-right">
              Analyzed customer data and crafted a customizable data
              visualization dashboard using Flask and Plotly to improve user
              satisfaction by 7%.
            </p>
            <p data-aos="fade-right">
              Developed dynamic dashboards to visualize KPI metrics using Python
              libraries like Pandas and Matplotlib.
            </p>
            <p data-aos="fade-right">
              Developed an NLP-powered chatbot using spaCy and TensorFlow,
              addressing user queries and enhancing user experience.
            </p>
            <p data-aos="fade-right">
              Integrated the tools with existing BI infrastructure using Azure
              cloud, enhancing overall system functionality and performance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"June 2019 - July 2019"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Data Analytics Intern
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Pune Municipal Corporation
            </h4>
              </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"June 2019 - July 2019"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Data Analytics Intern
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Pune Municipal Corporation
            </h4>
            <p data-aos="fade-right">
              Cleaned and processed 12 noisy public datasets using Pandas and
              NumPy to be used by various departments of PMC.
            </p>
            <p data-aos="fade-right">
              Crafted comprehensive visualizations and generated 7 insightful
              reports from the processed data, leveraging a diverse toolkit
              including Matplotlib, Tableau and Power BI.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
};

export default Timeline;