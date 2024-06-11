import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import TransactionSection from "./components/TransactionSection";
import InfoCard from "./components/InfoCard";
const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan={{ base: 1, xl: 2}}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={{ base: 1}}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={{ base: 1 }}>
          <TransactionSection />
        </GridItem>
        <GridItem colSpan={{ base: 1}}>
          <InfoCard
            text="Learn more about Loans - Keeps your bitcoins, access it's value without selling it."
            imgUrl="/dot_bg.svg"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={{ base: 1 }}>
          <InfoCard
            text="Our real estate , mortgage and corporate account service"
            imgUrl="/grid_bg.svg"
            tagText="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
