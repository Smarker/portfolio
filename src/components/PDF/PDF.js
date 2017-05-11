import React from 'react';
import PDF from 'jspdf';

/* Create a pdf of my resume */
let createPDF = function() {
  var doc = new PDF()

  doc.setFontSize(16);
  doc.text('STEPHANIE MARKER', 80, 20);

  doc.setFontSize(11);
  doc.text('908-343-9188', 55, 25);
  doc.circle(82, 24, 1, 'F');
  doc.text('Stephanie.Marker93@gmail.com', 85, 25);
  doc.circle(145, 24, 1, 'F');
  doc.text('Clinton, NJ', 148, 25);
  
  doc.text('github.com/Smarker    linkedin.com/in/stephaniemarker    stephaniemarker.com', 40, 35);

  doc.text('_________________________________________________________________________________________', 10, 40);

  doc.setFontSize(10);

  doc.setFontType('bold');
  doc.text('TECHNICAL SKILLS', 10, 50);

  doc.setFontType('bold');
  doc.text('Languages', 10, 55);
  doc.setFontType('normal');
  doc.text('Java, JavaScript, Python, SQL, UNIX Shell, MATLAB, familiarity with Node.js and C', 45, 55);

  doc.setFontType('bold');
  doc.text('Web Frameworks', 10, 60);
  doc.setFontType('normal');
  doc.text('Angular, Bootstrap, familiarity with Rails', 45, 60);

  doc.setFontType('bold');
  doc.text('Databases', 10, 65); 
  doc.setFontType('normal');
  doc.text('MySQL, Postgres', 45, 65);

  doc.setFontType('bold');
  doc.text('Platforms', 10, 70); 
  doc.setFontType('normal');
  doc.text('Hadoop, Elasticsearch, Kibana, OpenShift 3', 45, 70);

  doc.setFontType('bold');
  doc.text('Version Control', 10, 75); 
  doc.setFontType('normal');
  doc.text('Git', 45, 75);

  doc.setFontType('bold');
  doc.text('PROJECTS', 10, 85);

  doc.setFontType('bold');
  doc.text('New Brunswick, New Jersey – EMPOWER High School Mentor                                                           Jan 2017-May 2017', 10, 90);
  doc.setFontType('normal');
  doc.rect(6, 93, 1.5, 1.5, 'F');
  doc.text('Created a lesson plan for high school students interested in computer science', 10, 95);
  doc.rect(6, 98, 1.5, 1.5, 'F');
  doc.text('Taught 10-20 students twice monthly for 2 hour programming lessons', 10, 100);
   doc.rect(6, 103, 1.5, 1.5, 'F');
  doc.text('The students created their own adventure game to apply their knowledge of decision statements, functions, and data types', 10, 105);

  doc.setFontType('bold');
  doc.text('Basking Ridge, New Jersey - Machine Learning Nanodegree Titanic Survival Project                                       Oct 2016', 10, 110);
  doc.setFontType('normal');
  doc.rect(6, 113, 1.5, 1.5, 'F');
  doc.text('Compared the accuracy score of different combinations of features to predict passenger survival on the titanic', 10, 115);
  doc.rect(6, 118, 1.5, 1.5, 'F');
  doc.text('Wrote a decision tree in python to predict survival of passengers on the titanic with at least 80% accuracy using features like', 10, 120);
  doc.text('sex, class, age, and number of parents and children', 10, 125);
  
  doc.setFontType('bold');
  doc.text('Basking Ridge, New Jersey Machine Learning Nanodegree Boston Housing Project                                        Oct 2016', 10, 130);
  doc.setFontType('normal');
  doc.rect(6, 133, 1.5, 1.5, 'F');
  doc.text('Interpreted a graph comparing a decision tree’s maximum depth vs. score and compared the training and testing complexity', 10, 135);
  doc.text('curves to find the optimal maximum depth of the model', 10, 140);
  doc.rect(6, 143, 1.5, 1.5, 'F');
  doc.text('Analyzed learning curves of Boston house pricing training and test data to see if adding more data would benefit the model', 10, 145);

  doc.setFontType('bold');
  doc.text('EXPERIENCE', 10, 155);

  doc.setFontType('bold');
  doc.text('Basking Ridge, New Jersey - UnitedHealth Group, Senior IT Data Analytics Analyst      		   Jul 2016-Dec 2016', 10, 160);
  doc.setFontType('normal');
  doc.rect(6, 163, 1.5, 1.5, 'F');
  doc.text('Won a company-held hackathon of over 25 teams by creating a Rails application that would help developers at UHG', 10, 165);
  doc.text('communicate their company-specific technical questions', 10, 170);
  doc.rect(6, 173, 1.5, 1.5, 'F');
  doc.text('Used multivariate regression to predict service response time based on transactions/day with at least 80% accuracy in Python', 10, 175);
  doc.rect(6, 178, 1.5, 1.5, 'F')
  doc.text('Wrote a JCL parser in Java that ran on Hadoop to parse thousands of JCL files for metadata', 10, 180);

  doc.setFontType('bold');
  doc.text('Basking Ridge, New Jersey - UnitedHealth Group, Sr. Tech Development Program Associate         Jun 2015-Jul 2016 ', 10, 185);
  doc.setFontType('normal');
  doc.rect(6, 188, 1.5, 1.5, 'F');
  doc.text('Won 1st place out of 65 teams for a machine learning contest held at UHG where our team presented a pitch to executive', 10, 190);
  doc.text('judges to increase member outreach and net promoter scores', 10, 195);
  doc.rect(6, 198, 1.5, 1.5, 'F');
  doc.text('Led a frontend team of 6 developers to create an Angular web app to depict relationships between programs at UHG and', 10, 200);
  doc.text('contributed to backend java spring services pulling from ElasticSearch', 10, 205);
  doc.rect(6, 208, 1.5, 1.5, 'F')
  doc.text('Created shell scripts to verify data consistency between hive ORC tables in tables in ElasticSearch', 10, 210);

  doc.setFontType('bold');
  doc.text('New Brunswick, New Jersey - Rutgers University CS111 Recitation Instructor                                 Sep 2014-May 2015', 10, 215);
  doc.setFontType('normal');
  doc.rect(6, 218, 1.5, 1.5, 'F');
  doc.text('Taught weekly sections of over 10 students basic java concepts', 10, 220);
  doc.rect(6, 223, 1.5, 1.5, 'F');
  doc.text('Graded students\' final coding projects and provided extra assistance to students on their projects or assignments', 10, 225);

  doc.setFontType('bold');
  doc.text('Basking Ridge, New Jersey - UnitedHealth Group, IT Intern                                                                 Jun 2014-Aug 2014', 10, 230);
  doc.setFontType('normal');
  doc.rect(6, 233, 1.5, 1.5, 'F');
  doc.text('Developed a dynamic web app using JavaScript with a 12 person team to assist user navigation within UHG offices', 10, 235);
  doc.rect(6, 238, 1.5, 1.5, 'F');
  doc.text('Created the algorithm to find the shortest path from a user’s current location to destination using JavaScript', 10, 240);

  doc.setFontType('bold');
  doc.text('EDUCATION', 10, 250);

  doc.text('Rutgers, the State University of New Jersey, New Brunswick, NJ                                                                         May 2015', 10, 255);
  doc.setFontType('normal');
  doc.text('School of Arts and Sciences Honors Program                                                             cumulative GPA, magna cum laude, 3.74', 10, 260);
  doc.setFontType('bold');
  doc.text('B.S. Computer Science, B.A. Mathematics', 10, 265);
  doc.setFontType('normal');
  doc.text('Computer Science GPA, 3.85; Mathematics GPA, 3.70', 119, 265);

  doc.setFontType('bold');
  doc.text('INDEPENDENT COURSEWORK', 10, 275);
  doc.text('Udacity Machine Learning Nanodegree                                                                                                      Oct 2016-present', 10, 280);
  doc.save('StephanieMarkerResume.pdf');
}

export default createPDF;