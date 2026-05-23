import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | SoZo Hair, Spa & Wigs",
  description: "Cookie Policy for SoZoHair.net",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-28 md:pt-36 pb-16">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-5 md:px-8">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h1 className="text-1xl md:text-2xl text-gray-900 mb-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-500">
            SoZo HAIR SPA &amp; WIGS
          </p>
        </div>

        {/* Content Card */}
        <div className=" overflow-hidden  ">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">

            <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-4 pb-2 border-b border-gray-200">
              ACCEPTANCE OF TERMS
            </h2>
            <p>
              Your access to and use of www.sozohair.net (&ldquo;the Website&rdquo;) and any Services referred to in Clause 2, is subject exclusively to these Terms and Conditions. You will not use the Website/Services for any purpose that is unlawful or prohibited by these Terms and Conditions. By using the Website/Services you are fully accepting the terms, conditions and disclaimers contained in this notice. If you do not accept these Terms and Conditions you must immediately stop using the Website/Services.
            </p>
            <p>
              We reserve the right to update or amend these Terms and Conditions at any time and your continued use of the Website/Services following any changes shall be deemed to be your acceptance of such change. It is therefore your responsibility to check the Terms and Conditions regularly for any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              THE SERVICES
            </h2>
            <p>
              The Website may provide communication tools such as email, bulletin boards, chat areas, news groups, forums and/or other message or communication facilities (&ldquo;the Services&rdquo;) designed to enable you to communicate with others. Unless stated otherwise the Services are for your personal and non-commercial use only.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              CHILD SUPERVISION
            </h2>
            <p>
              We are concerned about the safety and privacy of our users, particularly children. Parents who wish to allow their children access to and use of the Website/Services should supervise such access and use. By allowing your child access to the Services you are allowing your child access to all of the Services, including email, bulletin boards, chat areas, news groups, forums and/or other message or communication facilities. It is therefore your responsibility to determine which Services are appropriate for your child. Always use caution when revealing personally identifiable information about yourself or your children via any of the Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              PRIVACY POLICY
            </h2>
            <p>
              We are committed to responsible data management and subscribe to the principals of the data protection legislation in the United States of America. We are committed to maintaining the privacy of our users and maintaining the security of any personal information received from you. If you register for any of the Services you will be asked to provide basic personal information. The information provided by you is not available for sale or use by third parties. The information is used solely for notifying you of changes or updates to the Website/Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              USER ACCOUNT, PASSWORD AND SECURITY
            </h2>
            <p>
              If a particular Service requires you to open an account you will be required to complete the registration process by providing certain information and registering a username and password for use with that Service. You are responsible for maintaining the confidentiality of the username and password and also for all activities which take place under your account. You agree to immediately notify us of any unauthorised use of your password or account or any other breach of security. In no event will www.sozohair.net be liable for any indirect or consequential loss or damage whatsoever resulting from the disclosure of your username and/or password. You may not use another person&rsquo;s account at any time, without the express permission of the account holder.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              ACCEPTABLE USE
            </h2>
            <p>
              You acknowledge that all information, text, graphics, logos, photographs, images, moving images, sound, illustrations and other materials (&ldquo;the Content&rdquo;), whether posted publicly or transmitted privately, are the sole responsibility of the person from whom such Content originated. We do not control or endorse the Content and cannot guarantee the accuracy, integrity or quality of such Content and you acknowledge that by using the Services you may be exposed to Content that is offensive and/or indecent. www.sozohair.net will not be liable in any way for any Content or for any loss or damage of any kind resulting from the use of any Content transmitted via the Services and you agree to bear all risks associated with the use of any Content, including any reliance on the accuracy or completeness of such Content.
            </p>
            <p>In using the Website/Services you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>use the Services to send junk email, spam, chain letters, pyramid schemes or any other unsolicited messages, commercial or otherwise;</li>
              <li>post, publish, distribute or disseminate material or information that is defamatory, infringing, obscene, indecent, threatening, abusive, harassing or unlawful;</li>
              <li>post, publish, distribute or disseminate material or information that incites discrimination, hate or violence towards any person or group on account of their race, religion, disability, nationality or otherwise;</li>
              <li>threaten, abuse, disrupt, stalk or otherwise violate the legal rights (including rights of privacy and publicity) of others;</li>
              <li>use any information or material in any manner that infringes any copyright, trademark, patent or other proprietary right of any party;</li>
              <li>make available or upload files that contain a virus, worm, trojan or corrupt data that may damage the operation of the computer or property of another;</li>
              <li>collect or store personal information about others, including email addresses;</li>
              <li>advertise or offer to buy or sell goods or services for any commercial purpose, unless such communication facility specifically allows such messages;</li>
              <li>impersonate any person or entity for the purpose of misleading others;</li>
              <li>violate any applicable laws or regulations;</li>
              <li>use the Website/Services in any manner that could damage, disable, overburden or impair the Website/Services or interfere with any other party&rsquo;s use and enjoyment of the Website/Services;</li>
              <li>post, publish, distribute or disseminate material or information that you do not have a right to transmit under any law or under contractual or fiduciary relationships (such as inside information or confidential information disclosed in the course of employment or under a confidentiality agreement);</li>
              <li>attempt to gain unauthorised access to any of the Services, other accounts, computer systems or networks connected to the Website/Services through hacking, password mining or any other means.</li>
            </ul>
            <p>
              We have no obligation to monitor the Services but shall be entitled to review materials posted to a communications facility and, at our sole discretion, to remove any material that breaches these Terms and Conditions or is otherwise objectionable.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              TERMINATION
            </h2>
            <p>
              We have the right to terminate your access to any or all of the Services at any time, without notice, for any reason, including without limitation, breach of these Terms and Conditions. We may also at any time, at our sole discretion, discontinue the Website/Services or any part thereof without prior notice and you agree that we shall not be liable to you or any third party for any termination of your access to the Website/Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              LINKS TO THIRD PARTY WEBSITES
            </h2>
            <p>
              The Website/Services may include links to third party websites that are controlled and maintained by others. Any link to other websites is not an endorsement of such websites and you acknowledge and agree that www.sozohair.net is not responsible for the content or availability of any such sites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              INTERNATIONAL USE
            </h2>
            <p>
              You agree to comply with all applicable laws regarding the transmission of technical data exported from the United States of America or the country in which you reside (if different) and with all local laws and rules regarding acceptable use of and conduct on the Internet.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <p>
              The Website and its content (including without limitation the Website design, text, graphics and all software and source codes connected with the Website and the Services) are protected by copyright, trade marks, patents and other intellectual property rights and laws. In accessing the Website you agree that you will access the contents solely for your personal, non-commercial use. None of the content may be downloaded, copied, reproduced, transmitted, stored, sold or distributed without the prior written consent of the copyright holder. This excludes the downloading, copying and/or printing of pages of the Website for personal, non-commercial home use only.
            </p>
            <p>
              www.sozohair.net does not claim ownership of any materials you post, upload or submit to any publicly accessible area of the Services. However, by doing so you are granting us a world-wide, royalty free, non-exclusive licence to copy, distribute, transmit, reproduce, publicly display, edit, translate or publish such Content for as long as you elect to display such Content via the Services. The licence shall be terminated when such Content is deleted from the Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              INDEMNITY
            </h2>
            <p>
              You agree to indemnify and hold www.sozohair.net harmless from and against any breach by you of these Terms and Conditions and any claim or demand brought against www.sozohair.net by any third party arising out of your use of the Services and/or any Content submitted, posted or transmitted through the Services, including without limitation, all claims, actions, proceedings, losses, liabilities, damages, costs, expenses (including reasonable legal costs and expenses) howsoever suffered or incurred by www.sozohair.net in consequence of your breach of these Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              DISCLAIMERS AND LIMITATION OF LIABILITY
            </h2>
            <p>
              Use of the Website/Services is at your own risk. The Website/Services are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without any representation or endorsement made and without warranty of any kind whether express or implied, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security and accuracy. 
              <br/><br/>
              12.2 To the extent permitted by law, www.sozohair.net will not be liable for any indirect or consequential loss or damage whatsoever (including without limitation loss of business, opportunity, data, profits) arising out of or in connection with the use of the Website/Services. 
              <br/><br/>
              12.3 www.sozohair.net makes no warranty that the Website/Services will meet your requirements, that Content will be accurate or reliable, that the functionality of the Website/Services will be uninterrupted or error free, that defects will be corrected or that the Website/Services or the server that makes them available are free of viruses or anything else which may be harmful or destructive. 
              <br/><br/>
              12.4 Nothing in these Terms and Conditions shall be construed so as to exclude or limit the liability of www.sozohair.net for death or personal injury as a result of the negligence of www.sozohair.net. 
              <br/><br/>
              12.5 Nothing in these Terms and Conditions shall affect your statutory rights as a consumer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              SEVERANCE
            </h2>
            <p>
              If any of these Terms and Conditions should be determined to be invalid, illegal or unenforceable for any reason by any court of competent jurisdiction then such Term or Condition shall be severed and the remaining Terms and Conditions shall survive and remain in full force and effect and continue to be binding and enforceable.
            </p>

          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
