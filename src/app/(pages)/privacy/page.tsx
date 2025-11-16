import React from "react";

const PrivacyPage = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col gap-10 w-full max-w-4xl p-5 lg:p-10">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl xs:text-5xl lg:text-6xl font-bold text-text-primary">
              Privacy Policy
            </h1>
            <div className="h-[0.5px] w-full bg-text-primary opacity-50"></div>
            <p className="text-sm text-text-muted">
              Last updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 text-text-secondary">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed">
                ColorStack @ UCSD only collects information you choose to share
                when contacting us through our contact forms, membership
                applications, or event registrations. This typically includes
                your name, email address, student information, and any messages
                or project details you send. We don{"'"}t collect any
                information automatically or track your browsing behavior beyond
                basic website analytics.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed">
                We use your contact information solely to respond to your
                inquiries, process membership applications, manage event
                registrations, and communicate club-related information. We don
                {"'"}t use it for marketing, selling, or sharing with third
                parties. Your information is only used for direct communication
                related to ColorStack @ UCSD activities and operations.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                3. Information Sharing
              </h2>
              <p className="leading-relaxed">
                We don{"'"}t sell, trade, or share your personal information
                with anyone. Your contact details stay private and are only used
                for our direct communication. As a student organization
                affiliated with ColorStack National, we may share aggregate,
                anonymized data with the national organization for reporting
                purposes, but never individual personal information.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                4. Data Protection
              </h2>
              <p className="leading-relaxed">
                We take your privacy seriously and implement basic security
                measures to protect your information. However, as a student-run
                organization, we recommend not sharing sensitive or confidential
                information through our contact forms. We are not liable for any
                data breaches or security incidents beyond our reasonable
                control.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                5. Your Privacy Rights
              </h2>
              <p className="leading-relaxed">
                You can ask us to delete any information you{"'"}ve shared, or
                request to see what we have stored. Since we only keep basic
                contact details, there{"'"}s not much to manage, but we{"'"}re
                happy to help with any privacy concerns. Contact us at{" "}
                <a
                  href="mailto:colorstackatucsd@ucsd.edu"
                  className="text-primary-500 hover:text-primary-400 underline"
                >
                  colorstackatucsd@ucsd.edu
                </a>{" "}
                with any requests.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                6. Data Retention
              </h2>
              <p className="leading-relaxed">
                We keep your contact information only as long as needed to
                respond to your inquiry, process your membership, or manage your
                event participation. If you{"'"}re no longer a member or the
                conversation ends, we{"'"}ll delete your information within a
                reasonable time, typically within one year of your last
                interaction with the club.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                7. Cookies and Tracking
              </h2>
              <p className="leading-relaxed">
                This site uses minimal cookies and tracking technologies. We may
                use basic analytics to understand website usage, but we don{"'"}
                t monitor your individual visits or collect detailed analytics
                data. It{"'"}s a simple website designed to showcase our
                organization and provide a way for you to get in touch.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                8. Policy Updates
              </h2>
              <p className="leading-relaxed">
                If we make any changes to this privacy policy, we{"'"}ll update
                the date at the top. Since this is a student organization
                website, changes are unlikely, but we{"'"}ll keep you informed
                if anything important changes. Continued use of the site after
                changes means you accept the updated policy.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                9. Contact Us
              </h2>
              <p className="leading-relaxed">
                Questions about your privacy or this policy? Just reach out at{" "}
                <a
                  href="mailto:colorstackatucsd@ucsd.edu"
                  className="text-primary-500 hover:text-primary-400 underline"
                >
                  colorstackatucsd@ucsd.edu
                </a>
                . We{"'"}re committed to being transparent about how we handle
                your information.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
