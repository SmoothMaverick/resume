'use strict';

const Personal = {
  Name: 'Jason Hoang',
  Email: 'jasonhoang7@gmail.com',
  LinkedIn: 'linkedin.com/in/the-jason-hoang',
  Github: 'github.com/SmoothMaverick'
};

const Education = {
  School: 'University of California, Los Angeles (UCLA)',
  Degree: 'Bachelor of Science in Microbiology, 2007'
};

const jobItems = [
  {
    title: 'Kony, Inc',
    subtitle: 'Software Development Engineer',
    detail: 'Menlo Park, CA',
    startDate: 'Oct 2018',
    endDate: 'present',
    faIcon: 'fa-usd',
    summary: [
      'Continued improving the infrastructure after the acquisition',
      'Trained a team of 3 in Hyderabad, India to provide remote technical support and perform deployments',
      'Setup Spinnaker and created pipelines to perform production deployments with a push button',
      'Setup Helm and created charts so that deployed Kubernetes resources are consistent across environments'
    ]
  },
  {
    title: 'Pivotus Ventures (acquired by Kony)',
    subtitle: 'DevOps Engineer',
    detail: 'Menlo Park, CA',
    startDate: 'Feb 2018',
    endDate: 'Oct 2018',
    faIcon: 'fa-address-book',
    summary: [
      'Lead infrastructure-as-code practices with a team that preferred shells scripts and manual proceseses',
      'Brought consistency and ease of managing more than 10 environments across 3 geographic regions',
      'Created re-usable Terraform modules for AWS services such as S3, VPC, EC2, EKS, RDS, Elasticache and Lambda functions',
      'Created tools written in Golang to perform repetitive functions such as checking deployed artifacts for nine projects by their hash values',
      'Implemented monitoring, logging and security tools unique to applications deployed on Kubernetes',
    ]
  },
  {
    title: 'Education Elements',
    subtitle: 'DevOps Engineer',
    detail: 'San Carlos, CA',
    startDate: 'Dec 2016',
    endDate: 'Oct 2017',
    faIcon: 'fa-graduation-cap',
    summary: [
      'Sole engineer responsible for the entire infrastructure, reported under the VP of Engineering',
      'Migrated applications deployed on a host server to pods in Kubernetes',
      'Setup Prometheus for monitoring Kubernetes services',
      'Developed an on-demand deployment system to increase development speed annd reduce AWS costs',
      'Reduced AWS costs by 33% within the first 4 months',
      'Managed servers with Salt and Chef',
    ]
  },
  {
    title: 'Itson, Inc.',
    subtitle: 'DevOps Engineer',
    detail: 'Redwood City, CA',
    startDate: 'May 2015',
    endDate: 'Nov 2016',
    faIcon: 'fa-mobile',
    summary: [
      'Managed deployment of our initial saas infrastructure to production, partnered with large telecom carriers (Sprint, Telefonica, Sapphire)',
      'Reduced time to run build-verification by running builds in parallel and using docker to deploy',
      'Simplified deployment of AWS stack using Cloudformation/Terraform',
    ]
  },
  {
    title: 'Podomatic, Inc',
    subtitle: 'Operations Engineer',
    detail: 'San Francisco, CA',
    startDate: 'March 2014',
    endDate: 'May 2015',
    faIcon: 'fa-music',
    summary: [
      'Created a unified development environment with Vagrant and Puppet',
      'Optimized site design using A/B testing with Google Analytics',
      'Improved server automation by translating scripts Puppet modules',
      'Backend Ruby on Rails development',
    ]
  },
  {
    title: 'City College of San Francisco',
    subtitle: 'Assistant Network Technician',
    detail: 'San Francisco, CA',
    startDate: 'June 2013',
    endDate: 'May 2014',
    faIcon: 'fa-university',
    summary: [
      'Resolved issues with Wifi connections in a timely, professional manner',
      'Performed quality control and testing for deployment of latest Meraki WiFi Technology',
    ]
  },
];

const resumeSummary = [
  'DevOps engineer aspiring to solve interesting challenges using software and creative solutions',
  'Interested in scaling large systems using cloud frameworks like AWS and Kubernetes',
  'Skilled with configuration management tools (Chef, Puppet, Terraform, Cloudformation)',
  'Automates everything using CI/CD tools and scripting',
  'Experienced with monitoring and metrics (Prometheus, Nagios, Zabbix, Cloudwatch)',
];

const App = React.createClass({
  render: function () {
    return (
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="seven columns">
              <HeroTitle
                title={Personal.Name}
                subtitle="build smarter, build faster"
                avatarSrc="/src/img/avatar.jpg"
              />
            </div>
            <div className="five columns contact-info">
              <div className="inline-icon-item">
                <span>{Personal.Email}</span><i className="fa fa-envelope fa-fw"></i>
              </div>
              <div className="inline-icon-item">
                <span>{Personal.LinkedIn}</span><i className="fa fa-linkedin fa-fw"></i>
              </div>
              <div className="inline-icon-item">
                <span>{Personal.Github}</span><i className="fa fa-github fa-fw"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <SectionHeader
              title="Summary"
            />
            {
              resumeSummary.map(t => {
                return (
                  <div className="row resumeSummary">
                    <div className="twelve columns">
                      {t}
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div className="row">
            <SectionHeader
              title="Experience"
            />
            <Timeline
              items={jobItems}
            />
          </div>

          <div className="row">
            <SectionHeader
              title="Education"
            />
            <div className="row education strong">
              <div className="twelve columns school">
                <strong>{Education.School}</strong>
              </div>
              <div className="twelve columns degree">
                <span>{Education.Degree}</span>
              </div>
            </div>
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
