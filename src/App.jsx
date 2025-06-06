import 'font-awesome/css/font-awesome.min.css';
import 'skeleton-css/css/skeleton.css';
import 'devicon/devicon.min.css';
import './index.css';
import './styles.css';
import "./data/info.js";
import { timeline } from "./data/timeline.js";
import { contact, education, headline, skills } from './data/info';

const App = () => (
  <div className="page">
    <div className="container">
      <div className="row headline">
        <div className="six columns">
          <HeroTitle
            title={contact.name}
            subtitle="build smarter, build faster"
          />
        </div>
        <ContactInfo
          email={contact.email}
          linkedin={contact.linkedin}
          github={contact.github}
        />
      </div>
      <div className="row headline">
        <div className="twelve columns">
          {headline}
        </div>
      </div>
      <div className="row">
        <SectionHeader title="Skills" />
        <SkillsInfo items={skills} />
      </div>
      <div className="row">
        <SectionHeader title="Experience" />
        <Timeline items={timeline} />
      </div>
      <div className="row">
        <SectionHeader title="Education" />
        <EducationInfo
          school={education.schoo}
          degree={education.degree}
        />
      </div>
      <div className="corner-footer">
        I <i className="fa fa-heart-o"></i> <i className="devicon-vim-plain"></i>
      </div>
    </div>
  </div>
);

const HeroTitle = ({ title, subtitle }) => (
  <div className="hero-header">
    <div className="row">
      <div className="hero-title seven columns">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  </div>
);

const ContactInfo = ({ email, linkedin, github }) =>
(
  <div className="five columns contact">
    <div className="inline-icon-item">
      <span>{email}</span><i className="fa fa-envelope fa-fw"></i>
    </div>
    <div className="inline-icon-item">
      <span>{linkedin}</span><i className="fa fa-linkedin fa-fw"></i>
    </div>
    <div className="inline-icon-item">
      <span>{github}</span><i className="fa fa-github fa-fw"></i>
    </div>
  </div>
);

const SkillsInfo = ({ items }) =>
(
  <div className="row skills">
    <ul>
      {items.map(item => (
        <li key={item} className="skill-item">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const EducationInfo = ({ school, degree }) =>
(
  <div className="row education strong">
    <div className="twelve columns school">
      <strong>{school}</strong>
    </div>
    <div className="twelve columns degree">
      <span>{degree}</span>
    </div>
  </div>
);

const Timeline = ({ items }) => (
  <div className="timeline">
    <div className="timeline-items">
      <div className="page-line"></div>
      {items.map(item => (
        <TimelineItem key={item.title} item={item} />
      ))}
    </div>
  </div>
);

const TimelineItem = ({ item }) => {
  const fullTitle = `${item.subtitle} at ${item.title}`;
  const titleItem = item.subtitle ? fullTitle : item.title;

  return (
    <div className="row timeline-item">
      <div className="one column">
        <TimelineMilestoneIcon faIcon={item.faIcon} />
      </div>
      <div className="ten columns">
        <div className="item-dates">
          {item.startDate} - {item.endDate}
        </div>
        <div className="item-info">
          <div className="item-title">{titleItem}</div>
          <div className="item-detail">{item.detail}</div>
          <ul>
            {item.summary.map(summaryItem => (
              <li key={summaryItem} className="item-summary">
                {summaryItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const SectionHeader = ({ title }) =>
(
  <div className="row">
    <div className="two columns">
      <div className="invisible">Filler</div>
    </div>
    <div className="section-header-title">
      {title}
    </div>
  </div>
);

const TimelineMilestoneIcon = ({ faIcon, isLarge }) => {
  const stackClassName = isLarge ? "fa-stack fa-lg" : "fa-stack";
  return (
    <div className="timeline-milestone-icon">
      <span className={stackClassName}>
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className={`fa ${faIcon} fa-stack-1x fa-inverse`}></i>
      </span>
    </div>
  );
}

export default App