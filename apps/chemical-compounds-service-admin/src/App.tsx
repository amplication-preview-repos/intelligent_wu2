import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CompoundList } from "./compound/CompoundList";
import { CompoundCreate } from "./compound/CompoundCreate";
import { CompoundEdit } from "./compound/CompoundEdit";
import { CompoundShow } from "./compound/CompoundShow";
import { SynonymList } from "./synonym/SynonymList";
import { SynonymCreate } from "./synonym/SynonymCreate";
import { SynonymEdit } from "./synonym/SynonymEdit";
import { SynonymShow } from "./synonym/SynonymShow";
import { ReferenceList } from "./reference/ReferenceList";
import { ReferenceCreate } from "./reference/ReferenceCreate";
import { ReferenceEdit } from "./reference/ReferenceEdit";
import { ReferenceShow } from "./reference/ReferenceShow";
import { PropertyList } from "./property/PropertyList";
import { PropertyCreate } from "./property/PropertyCreate";
import { PropertyEdit } from "./property/PropertyEdit";
import { PropertyShow } from "./property/PropertyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ChemicalCompoundsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Compound"
          list={CompoundList}
          edit={CompoundEdit}
          create={CompoundCreate}
          show={CompoundShow}
        />
        <Resource
          name="Synonym"
          list={SynonymList}
          edit={SynonymEdit}
          create={SynonymCreate}
          show={SynonymShow}
        />
        <Resource
          name="Reference"
          list={ReferenceList}
          edit={ReferenceEdit}
          create={ReferenceCreate}
          show={ReferenceShow}
        />
        <Resource
          name="Property"
          list={PropertyList}
          edit={PropertyEdit}
          create={PropertyCreate}
          show={PropertyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
