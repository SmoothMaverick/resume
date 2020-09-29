'use strict';

const App = React.createClass({
  render: function () {
    return (
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="seven columns">
              <HeroTitle
                title={contact.name}
                subtitle="build smarter, build faster"
                avatarSrc="/src/img/avatar.jpg"
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
            <SectionHeader
              title="Skills"
            />
            <SkillsInfo
              items={skills}
            />
          </div>
          <div className="row">
            <SectionHeader
              title="Experience"
            />
            <Timeline
              items={timeline}
            />
          </div>

          <div className="row">
            <SectionHeader
              title="Education"
            />
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
  }
});

const HeroTitle = React.createClass({
  render: function () {
    return (
      <div className="hero-header">
        <div className="row">
          <div className="five columns avatar">
            <img width="122" src={this.props.avatarSrc} alt="Me" className="u-max-full-width" />
          </div>
          <div className="hero-title seven columns">
            <div className="title">{this.props.title}</div>
            <div className="subtitle">{this.props.subtitle}</div>
          </div>
        </div>
      </div>
    );
  }
});

const ContactInfo = React.createClass({
  render: function () {
    return (
      <div className="five columns contact">
        <div className="inline-icon-item">
          <span>{this.props.email}</span><i className="fa fa-envelope fa-fw"></i>
        </div>
        <div className="inline-icon-item">
          <span>{this.props.linkedin}</span><i className="fa fa-linkedin fa-fw"></i>
        </div>
        <div className="inline-icon-item">
          <span>{this.props.github}</span><i className="fa fa-github fa-fw"></i>
        </div>
      </div>
    )
  }
});

const SkillsInfo = React.createClass({
  render: function () {
    return (
      <div className="row skills">
        <ul>
          {this.props.items.map(item => {
            return (
              <li className="skill-item">
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
});

const EducationInfo = React.createClass({
  render: function () {
    return (
      <div className="row education strong">
        <div className="twelve columns school">
          <strong>{this.props.school}</strong>
        </div>
        <div className="twelve columns degree">
          <span>{this.props.degree}</span>
        </div>
      </div>
    )
  }
});

const Timeline = React.createClass({
  render: function () {
    return (
      <div className="timeline">
        <div className="timeline-items">
          <div className="page-line"></div>
          {this.props.items.map(item => {
            return <TimelineItem item={item} />
          })}
        </div>
      </div>
    );
  }
});

const TimelineItem = React.createClass({
  render: function () {
    return (
      <div className="row timeline-item">
        <div className="one column">
          <TimelineMilestoneIcon faIcon={this.props.item.faIcon} />
        </div>
        <div className="ten columns">
          <div className="item-dates">
            {this.props.item.startDate} - {this.props.item.endDate}
          </div>
          <div className="item-info">
            <div className="item-title">
              {this.props.item.subtitle} at {this.props.item.title}
            </div>
            <div className="item-detail">
              {this.props.item.detail}
            </div>
            <ul>
              {this.props.item.summary.map(i => {
                return (
                  <li className="item-summary">
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

const SectionHeader = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="two columns">
          <div className="invisible">Filler</div>
        </div>
        <div className="section-header-title">
          {this.props.title}
        </div>
      </div>
    );
  }
});

const TimelineMilestoneIcon = React.createClass({
  render: function () {
    const stackClassName = this.props.isLarge ? "fa-stack fa-lg" : "fa-stack";

    return (
      <div className="timeline-milestone-icon">
        <span className={stackClassName}>
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className={`fa ${this.props.faIcon} fa-stack-1x fa-inverse`}></i>
        </span>
      </div>
    );
  }
});

const IconItems = React.createClass({
  render: function () {
    return (
      <div className="icon-items">
        <SectionHeader
          title={this.props.title}
          faIcon={this.props.faIcon}
        />
        <div className="row">
          {this.props.items.map(item => {
            return (
              <div className="three columns">
                <IconItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

const IconItem = React.createClass({
  render: function () {
    return (
      <div className="icon-item">
        <i className={`${this.props.devicon}`}></i>
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
