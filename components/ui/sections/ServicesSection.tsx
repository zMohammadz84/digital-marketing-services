import { FC } from "react";
import ServiceBox from "../../modules/ServiceBox";

const ServicesSection: FC = () => {
  return (
    <section className="container">
      <div className="section-header__container">
        <h1 className="section-header__title">Services</h1>
        <p className="section-header__desc">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="gap-10 mt-8 grid grid-cols-1 md:grid-cols-2 lg:mt-14">
        <ServiceBox
          alt="Search engine optimization"
          image="/images/services/SearchEngine.png"
          boxBgColor="gray"
          imgClassName="lg:w-44"
        >
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-primary-color">
            Search engine
          </h2>
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-primary-color">
            optimization
          </h2>
        </ServiceBox>
        <ServiceBox
          alt="Pay-per-click advertising"
          image="/images/services/Pay-per-click.png"
          boxBgColor="green"
          imgClassName="lg:w-44 "
        >
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-gray-color">
            Pay-per-click
          </h2>
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-gray-color">
            advertising
          </h2>
        </ServiceBox>
        <ServiceBox
          alt="Social Media Marketing"
          image="/images/services/Social Media.png"
          boxBgColor="black"
          imgClassName="h-32 w-32 lg:w-44  lg:h-auto"
        >
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-gray-color">
            Social Media
          </h2>
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-gray-color">
            Marketing
          </h2>
        </ServiceBox>
        <ServiceBox
          alt="Email Marketing"
          image="/images/services/Email-marketing.png"
          boxBgColor="gray"
          imgClassName="h-32 w-32 lg:w-44  lg:h-auto"
        >
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-primary-color">
            Email
          </h2>
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-primary-color">
            Marketing
          </h2>
        </ServiceBox>
        <ServiceBox
          alt="Content Creation"
          image="/images/services/Content-creation.png"
          boxBgColor="green"
          imgClassName="h-32 w-32 lg:w-44 lg:h-auto"
        >
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-gray-color">
            Content
          </h2>
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-gray-color">
            Creation
          </h2>
        </ServiceBox>
        <ServiceBox
          alt="Analytics and Tracking"
          image="/images/services/Analytics.png"
          boxBgColor="black"
          imgClassName="h-32 w-34 lg:w-44 lg:h-auto"
        >
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-gray-color">
            Analytics and
          </h2>
          <h2 className="text-2xl inline-block py-0.5 px-2 rounded-md bg-custom-gray-color">
            Tracking
          </h2>
        </ServiceBox>
      </div>
    </section>
  );
};

export default ServicesSection;
