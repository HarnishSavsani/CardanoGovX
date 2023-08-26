import { useEffect, useState, useContext } from "react";

import Card from "../Card";
import AddCard from "../AddCard";
import { useSpaceContext } from '../../../../utils/contexts/SpaceContext';

import styles from "./styles.module.scss";

import CardanoGovXLogo from '../../../../public/assets/spaces/CardanoGovX-logo.svg';
import CARDANOLogo from '../../../../public/assets/spaces/CARDANO-logo.svg';

import { ProposalsContext } from "../../../../utils/contexts/ProposalsContext";

const List = () => {
  const { updateSpaceType } = useSpaceContext()
  const { clear } = useContext(ProposalsContext);

  useEffect(() => {
    clear();
  }, []);

  return (
    <div className={styles.listContainer}>
      <AddCard />

      <div onClick={() => updateSpaceType('CARDANO')}>
        <Card id={2} title={'CARDANO Community'} description={'A hub for proposals related to the CARDANO Community.'} image={CARDANOLogo} isVerified={false} isActive={false}/>
      </div>

      <div onClick={() => updateSpaceType('CardanoGovX')}>
        <Card id={1} title={'CardanoGovX DAO'} description={'A hub for making decisions about the future of the CardanoGovX dApp.'} image={CardanoGovXLogo} isVerified={true} isActive={true} />
      </div>
    </div>
  );
};

export default List;
