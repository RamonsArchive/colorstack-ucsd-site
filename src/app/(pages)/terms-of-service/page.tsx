import React from "react";

const TermsOfServicePage = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col gap-10 w-full max-w-4xl p-5 lg:p-10">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl xs:text-5xl lg:text-6xl font-bold text-text-primary">
              Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using this website, you agree to these Terms of
                Service. If you don{"'"}t agree, please don{"'"}t use the site.
                These terms apply to all visitors, members, and users of the
                ColorStack @ UCSD website.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                2. What This Site Is
              </h2>
              <p className="leading-relaxed">
                This is the official website for ColorStack @ UCSD, a student
                organization at UC San Diego dedicated to supporting Black and
                Hispanic software engineering students. It{"'"}s designed to
                help students learn about our organization, join our community,
                and stay informed about events and opportunities.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                3. Contacting Us
              </h2>
              <p className="leading-relaxed">
                You can reach out through our contact forms for membership
                inquiries, event questions, or general information. We{"'"}ll do
                our best to respond to all messages within a reasonable time.
                Please be respectful and professional in all communications.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                4. Website Content
              </h2>
              <p className="leading-relaxed">
                All content on this website, including text, images, logos, and
                design, is the property of ColorStack @ UCSD or used with
                permission. Feel free to explore and get inspired, but please
                respect our intellectual property and don{"'"}t reproduce
                content without permission.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                5. What You Can{"'"}t Do
              </h2>
              <p className="leading-relaxed">
                Please don{"'"}t try to hack the site, send spam, upload
                malicious files, use the contact forms for inappropriate
                purposes, or engage in any activity that could harm the website
                or other users. Just be respectful and professional. Violations
                may result in being banned from the site.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                6. Privacy
              </h2>
              <p className="leading-relaxed">
                We only collect the information you choose to share when
                contacting us. We won{"'"}t sell your data or use it for
                anything other than responding to your message and managing club
                operations. Your privacy matters to us. See our{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary-500 hover:text-primary-400 underline"
                >
                  Privacy Policy
                </a>{" "}
                for more details.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                7. Membership and Participation
              </h2>
              <p className="leading-relaxed">
                While we welcome all students interested in joining ColorStack @
                UCSD, submitting a membership application or contacting us doesn
                {"'"}t guarantee membership. We evaluate each application based
                on our membership criteria and capacity. Membership is subject
                to our club bylaws and UCSD student organization policies.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                8. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                ColorStack @ UCSD, its officers, members, and the University of
                California are not liable for any damages, losses, or issues
                that might arise from using this website or participating in
                club activities. This site is provided as-is for informational
                purposes only. We are a student organization and cannot be held
                responsible for technical issues, data loss, or any consequences
                of using this website.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                9. Site Availability
              </h2>
              <p className="leading-relaxed">
                We try to keep the site running smoothly, but sometimes things
                break or we need to update it. We can{"'"}t guarantee it{"'"}ll
                always be available 24/7. As a student-run organization,
                maintenance may be delayed during academic breaks or busy
                periods.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                10. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                We might update these terms occasionally to reflect changes in
                our organization or website. If we make significant changes, we
                {"'"}ll try to let you know by updating the {'"'}Last updated
                {'"'} date. Using the site after changes means you accept the
                new terms.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                11. Contact Us
              </h2>
              <p className="leading-relaxed">
                Questions about these terms? Just reach out at{" "}
                <a
                  href="mailto:colorstackatucsd@ucsd.edu"
                  className="text-primary-500 hover:text-primary-400 underline"
                >
                  colorstackatucsd@ucsd.edu
                </a>
                . We{"'"}re happy to clarify anything!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
