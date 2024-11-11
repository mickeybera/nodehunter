import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Our Coding Website</h1>

      {/* Mission Statement */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to make coding accessible and engaging for everyone. Whether you're a beginner or an experienced developer, 
          our goal is to provide the resources, tools, and community support you need to succeed on your coding journey.
        </p>
      </section>

      {/* What We Offer */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What We Offer</h2>
        <p style={styles.text}>
          We believe learning to code should be interactive and fun. Here’s what we offer:
        </p>
        <ul style={styles.list}>
          <li><strong>Interactive Tutorials</strong> - Hands-on tutorials across various programming languages.</li>
          <li><strong>Copyable Code Snippets</strong> - Easily copy examples and try them out in your own environment.</li>
          <li><strong>Guided Projects</strong> - Step-by-step projects from web development to data science.</li>
          <li><strong>Community Support</strong> - A supportive community for discussions, Q&A, and feedback.</li>
          <li><strong>Weekly Challenges</strong> - Coding challenges to test your skills and reinforce learning.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <p style={styles.text}>
          Here’s why we stand out from the crowd:
        </p>
        <ul style={styles.list}>
          <li><strong>Beginner-Friendly</strong> - Tutorials that start from the basics.</li>
          <li><strong>Community-Driven</strong> - Engage with others, find mentors, and collaborate.</li>
          <li><strong>Up-to-Date Content</strong> - Regular updates to cover the latest technologies.</li>
          <li><strong>Flexible Learning Paths</strong> - Learn at your own pace and select topics that interest you.</li>
        </ul>
      </section>

      {/* Technologies and Languages Covered */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Technologies and Languages We Cover</h2>
        <p style={styles.text}>
          Our tutorials and projects span a wide range of programming languages and technologies:
        </p>
        <ul style={styles.list}>
          <li><strong>Languages</strong> - Python, JavaScript, Java, C++, HTML, CSS, SQL.</li>
          <li><strong>Frameworks</strong> - React, Node.js, Django, Flask, Bootstrap.</li>
          <li><strong>Data Science</strong> - NumPy, Pandas, TensorFlow, Scikit-learn.</li>
          <li><strong>Tools</strong> - Git, GitHub, VS Code, Docker, and more.</li>
        </ul>
      </section>

      {/* Community and Support */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Join Our Community</h2>
        <p style={styles.text}>
          Learning is more enjoyable with a supportive community. Our platform offers forums and mentorship programs where you can connect with others. Share ideas, ask questions, and find study buddies or mentors.
        </p>
      </section>

      {/* Contact Information */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.text}>
          Have questions or feedback? Reach out to us at <a href="mailto:support@codingwebsite.com" style={styles.link}>support@codingwebsite.com</a>.
        </p>
      </section>
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2d6a4f',
    marginBottom: '1.5rem',
  },
  section: {
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#f0f4f8',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#1b4332',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '1rem',
    color: '#333',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    marginTop: '0.5rem',
  },
  link: {
    color: '#0077b6',
    textDecoration: 'none',
  },
  // Responsive styling for smaller screens
  '@media (max-width: 600px)': {
    container: {
      padding: '1rem',
    },
    title: {
      fontSize: '2rem',
    },
    sectionTitle: {
      fontSize: '1.5rem',
    },
    text: {
      fontSize: '0.9rem',
    },
  },
};

export default AboutPage;
