import homeImage from "../../assets/images/homepage_background.jpg";
import PAImage from "../../assets/images/PA.jpg";
import BKandPAYImage from "../../assets/images/BK_PAY2.jpg";
import PAandAdminImage from "../../assets/images/PA_Admin.jpg";
import AdHocImage from "../../assets/images/diary.jpg";

import {
  HomeWrapper,
  HomeImage,
  HomeOfferItem,
  HomeOfferItemImage,
  HomeOfferItemTitle,
  ServicesWrapper,
  HomeHeader,
  TextWrapper,
} from "./StyledHome";

const Home = () => {
  return (
    <div>
      <HomeWrapper>
        <HomeImage src={PAImage} />
        <div>
          <HomeHeader>
            Ready to bring balance to your working life? Hire a UK-based Virtual
            Assistant!
          </HomeHeader>

          <TextWrapper>
            Virtual assistants are remote workers who work on a contract basis
            to handle tasks on your behalf.
          </TextWrapper>
          <TextWrapper>
            Hiring a VA service can be a great way to free up valuable time for
            busy business owners to build and grow the business.
          </TextWrapper>
          <TextWrapper>
            We offer flexible and scalable plans to suit your needs. Holiday and
            illness cover.
          </TextWrapper>
          <TextWrapper>
            All of our Virtual Assistants are based in the UK, have several
            years of experience in blue chip companies and the expertise needed
            to support you as you grow your business.
          </TextWrapper>
        </div>
      </HomeWrapper>
      <ServicesWrapper>
        <HomeOfferItem>
          <HomeOfferItemImage src={PAandAdminImage} />

          <HomeOfferItemTitle>PA & Administration</HomeOfferItemTitle>
        </HomeOfferItem>
        <HomeOfferItem>
          <HomeOfferItemImage src={homeImage} />
          <HomeOfferItemTitle>HR & Management</HomeOfferItemTitle>
        </HomeOfferItem>
        <HomeOfferItem>
          <HomeOfferItemImage src={BKandPAYImage} />
          <HomeOfferItemTitle>Bookkeeping & Payroll</HomeOfferItemTitle>
        </HomeOfferItem>
        <HomeOfferItem>
          <HomeOfferItemImage src={AdHocImage} />
          <HomeOfferItemTitle>Ad-hoc support </HomeOfferItemTitle>
        </HomeOfferItem>
      </ServicesWrapper>
    </div>
  );
};

export default Home;
