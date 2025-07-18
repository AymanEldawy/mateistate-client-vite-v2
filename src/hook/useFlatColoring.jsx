import {
  DEFAULT_COLORS,
  FLAT_PROPERTY_TABS,
} from "@/helpers/building/buildingHelpers";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const FlatColoringContext = createContext(null);

const COLLECTION_COUNTS = {};

const deleteAssetsById = async (table, row) => {
  // const response = await ApiActions.remove(table, {
  //   conditions: [{ type: "and", conditions: [["id", "=", row?.id]] }],
  // });
  // if (response?.success) {
  //   await ApiActions.remove("cost_center", {
  //     conditions: [
  //       { type: "and", conditions: [["id", "=", row?.cost_center_id]] },
  //     ],
  //   });
  // }
};

const calculateRoomCount = (collections, setRoomCounts) => {
  const counts = {};
  for (const hex in collections) {
    counts[collections[hex]] = counts[collections[hex]]
      ? counts[collections[hex]] + 1
      : 1;
  }
  setRoomCounts(counts);
};

export const FlatColoringProvider = ({ children }) => {
  const [hex, setHex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [flatsDetails, setFlatsDetails] = useState({});
  const [canInsertColor, setCanInsertColor] = useState(false);
  const [roomCounts, setRoomCounts] = useState({});
  const [UNITS_COLORED_COUNT, setUNITS_COLORED_COUNT] = useState({});
  const [UPDATES_ROWS, setUPDATES_ROWS] = useState({});
  const [availableColors, setAvailableColors] = useState(DEFAULT_COLORS);

  useEffect(() => {
    calculateRoomCount(COLLECTION_COUNTS, setRoomCounts);
  }, [JSON.stringify(COLLECTION_COUNTS)]);

  useEffect(() => {}, []);

  // select color
  const onSelectColor = (rowIndex, hexValue) => {
    setSelectedIndex(+rowIndex);
    setHex(hexValue);
    setCanInsertColor(true);
  };

  const changeAvailableColors = useCallback((color) => {
    if (!color) return;
    setAvailableColors((prev) => prev?.filter((c) => c !== color));
  }, []);

  const onPreventColor = () => {
    setSelectedIndex("");
    setHex("");
    setCanInsertColor(false);
  };

  const calculateUnitsColoringOnAdd = (tab, indexHash) => {
    let assets = UNITS_COLORED_COUNT?.[tab];
    if (assets?.[indexHash]) return;

    setUNITS_COLORED_COUNT((prev) => ({
      ...prev,
      [tab]: {
        ...prev?.[tab],
        [indexHash]: true,
      },
    }));
  };

  const calculateUnitsColoringOnRemove = (tab, indexHash) => {
    let assets = UNITS_COLORED_COUNT?.[tab];
    if (!assets?.[indexHash]) return;

    delete assets?.[indexHash];
    // insert
    setUNITS_COLORED_COUNT((prev) => ({
      ...prev,
      [tab]: assets,
    }));
  };

  const onInsertColor = (tab, indexHash, additional) => {
    if (typeof tab !== "string") return;

    let tabSettings = FLAT_PROPERTY_TABS[tab];
    let flatType = tabSettings?.type
      ? { [tabSettings?.type_col_name]: tabSettings?.type }
      : {};
    let rest = additional
      ? { ...additional, [tabSettings?.no]: additional?.name, ...flatType }
      : {};
    let prevData = flatsDetails?.[tab]?.[indexHash];

    console.log(prevData, "prevData");

    if (additional.name) COLLECTION_COUNTS[additional?.name] = hex;

    calculateUnitsColoringOnAdd(tab, indexHash);
    let prevItem = flatsDetails?.[tab]?.[indexHash];

    console.log("onInsertColor", tab, indexHash, rest, prevItem);
    // if (prevItem?.id && prevItem?.hex !== hex) {
    //   // Handle delete prev asset
    //   // let asset = FLAT_PROPERTY_TABS?.[tab];
    //   // deleteAssetsById(asset?.table, prevItem);
    //   // prevData = {};
    // }

    if (!UPDATES_ROWS?.[indexHash]) {
      setUPDATES_ROWS((prev) => ({
        ...prev,
        [indexHash]: true,
      }));
    }

    setFlatsDetails((prev) => ({
      ...prev,
      [tab]: {
        ...prev?.[tab],
        [indexHash]: {
          ...prevData,
          ...rest,
          hex: hex,
          rowIndex: selectedIndex,
          assetHash: indexHash,
          // floor_no: selectedIndex + 1,
        },
      },
    }));
  };

  const onRemoveFromColor = (tabName, item) => {
    delete COLLECTION_COUNTS[item];

    let flats = flatsDetails;
    let removedItem = flats?.[tabName]?.[item];
    // Handle delete prev asset
    if (removedItem?.id) {
      let asset = FLAT_PROPERTY_TABS?.[tabName];
      deleteAssetsById(asset?.table, removedItem);
    }
    calculateUnitsColoringOnRemove(tabName, item);
    delete flats[tabName][item];
    setFlatsDetails(() => ({
      ...flats,
    }));
  };

  const onChangeApartmentName = (tab, indexHash, value) => {
    let tabSettings = FLAT_PROPERTY_TABS[tab];
    setFlatsDetails((prev) => ({
      ...prev,
      [tab]: {
        ...prev?.[tab],
        [indexHash]: {
          ...prev?.[tab]?.[indexHash],
          [tabSettings.no]: value,
        },
      },
    }));
    if (!UPDATES_ROWS?.[indexHash]) {
      setUPDATES_ROWS((prev) => ({
        ...prev,
        [indexHash]: true,
      }));
    }
  };

  return (
    <FlatColoringContext.Provider
      value={{
        flatsDetails,
        setFlatsDetails,
        selectedIndex,
        onSelectColor,
        onPreventColor,
        canInsertColor,
        onInsertColor,
        // onRemoveOneItemColor,
        onRemoveFromColor,
        onChangeApartmentName,
        roomCounts,
        COLLECTION_COUNTS,
        UPDATES_ROWS,
        setUPDATES_ROWS,
        availableColors,
        changeAvailableColors,
        UNITS_COLORED_COUNT,
        setUNITS_COLORED_COUNT,
      }}
    >
      {children}
    </FlatColoringContext.Provider>
  );
};

const useFlatColoring = () => useContext(FlatColoringContext);

export default useFlatColoring;
