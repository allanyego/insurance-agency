import React, { useEffect, useState } from "react";
import { Document, Page } from "@react-pdf/renderer";

import { Note as PolicySchedule } from "./PolicySchedule";
import { Note as DebitNote } from "./DebitNote";
import Fallback from "../../components/Fallback";
import Unapproved from "./Unapproved";
import Unauthorized from "./Unauthorized";
import NotFound from "./NotFound";

export const PRINT_DOC = "PRINT_DOC";

export default function Print({ auth }) {
  const [printDoc, setPrintDoc] = useState(null);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem(PRINT_DOC));
    data = {
      auth,
      ...data,
    };

    setPrintDoc(data);

    return () => localStorage.removeItem(PRINT_DOC);
  }, [auth]);

  if (!printDoc) {
    return <Fallback />;
  }

  if (!auth?.token) {
    return <Unauthorized />
  }

  if (!printDoc?.policy) {
    return <NotFound />
  }

  if (!printDoc?.policy?.approved) {
    return (
      <Unapproved policy={printDoc.policy} />
    );
  }

  return (
    <Document>
      <Page>
        {printDoc.policy.type === "new" ? (
          <PolicySchedule {...printDoc} />
        ) : (
          <DebitNote {...printDoc} />
        )}
      </Page>
    </Document>
  );
}
