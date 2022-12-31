import React from "react";
import useState from "react";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/templates/Layout";
import  Axios  from "axios";



const contracts: NextPage = () => {
  function contract(){
    Axios.put("http://localhost:8000/agreementContract",{id:Number(localStorage.getItem("user_id")) , Instructor_Agreement: true})
    .then((response) => {
    
   }).catch((error) => console.log(error))
 }
  return (
    <div className="bg-bc h-screen">
      <Head>
        <title>Contracts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Layout> */}
        <div className="grid grid-cols-1 gap-4 bg-bc bg-screen text-white justify-center items-center py-2 px-2 text-bold">
          <div className="flex justify-center font-bold text-4xl"
          >Terms & Conditions</div>
          1. Agreement to Terms

<div>By viewing or using this Website, which can be accessed at INSERT WEBSITE URL or through our mobile application INSERT APPLICATION’S NAME, you are agreeing to be bound by all these Website’s Terms of Use and agree with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this Website or using the Service. All materials in this Website are protected by trade mark law and copyright.

For purposes of this Terms of Use, the terms “company”, “we” and “our” refers to the Company.
</div>
<div>
2. Privacy policy
</div>

We advise you to read our privacy policy INSERT PRIVACY POLICY LINK regarding our user data collection. It will help you better understand our practices.
<div>
3. Use License
</div>

<div>
Permission is granted to temporarily download one copy of the materials on our Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

modify or copy the materials;use the materials for any commercial purpose or for any public display;attempt to reverse engineer any software contained on our Website;
            remove any copyright or other proprietary notations from the materials;
            ortransferring the materials to another person or "mirror" the materials on any other server.

This will let Company to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is electronic format or printed.
</div>
<div>
4. Disclaimer
</div>
<div>
All the materials on our Website are provided on an “as is” basis.  You agree that your use of the Website will be at your own risk. We make no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Company does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
</div>
<div>
5. Limitations
</div>
<div>
Company or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on our Website, even if we or an authorised representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
</div>
<div>
6. Corrections
</div>
<div>
There may be information or materials appearing on our Website that contains technical, typographical, or photographic errors. We will not promise that any of the materials in this Website are accurate, complete, or current. We reserve the right to change and update the materials contained on its Website at any time without prior notice.
</div>
<div>
7. Links
</div>
<div>
Company ****has no control over all links provided on this Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement of the site by INSERT COMPANY’S NAME. The use of any linked website is at your own risk.
</div>
<div>
8. Modification of Terms of Use
</div>
<div>
Company may revise or include supplemental terms in these Terms of Use on its Website from time to time without prior notice. Please ensure that you check the current Terms of Use every time you use the Website. By using this Website, you are agreeing to be bound by the current version of these Terms of Use.
</div>
<div>
9. Applicable law
</div>
<div>
Any claim related to our Website shall be governed by the laws of INSERT STATE OF RESIDENCE OR INCORPORATION without regards to its conflict of law provisions.
          </div>

          <div className="flex justify-center">
            <Link href="/instructor">
              <div>
            <button onClick={()=>{contract()}} className=" p-2 rounded bg-gradient-to-r from-purple to-babyblue text-white font-bold">
              Accept terms & conditions
              </button>
              </div>
              </Link>
          </div>
          </div>

      {/* </Layout> */}
    </div>
  );
};

export default contracts;
