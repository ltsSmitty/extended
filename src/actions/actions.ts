export const landscapeActions = [
  "landbuyrights",
  "landlower",
  "landraise",
  "landsetheight",
  "landsetrights",
  "landsmooth",
  "surfacesetstyle",
  "tilemodify",
  "wallplace",
  "wallremove",
  "wallsetcolour",
  "waterlower",
  "waterraise",
  "watersetheight",
] as const;

export const sceneryActions = [
  "bannerplace",
  "bannerremove",
  "bannersetcolour",
  "bannersetname",
  "bannersetstyle",
  "clearscenery",
  "footpathadditionplace",
  "footpathadditionremove",
  "footpathplace",
  "footpathlayoutplace",
  "footpathremove",
  "largesceneryplace",
  "largesceneryremove",
  "largescenerysetcolour",
  "smallsceneryplace",
  "smallsceneryremove",
  "smallscenerysetcolour",
  "signsetname",
  "signsetstyle",
] as const;

export const scenarioEditingActions = [
  "mapchanged_scenarioEditor",
  "mapchanged_trackDesigner",
  "mapchanged_trackManager",
  "changemapsize",
  "mapchangesize",
  "climateset",
  "parkentranceplace",
  "parkentranceremove",
  "peepspawnplace",
  "scenariosetsetting",
] as const;

export const parkChangeActions = [
  "loadorquit",
  "mapchanged_titleScreen",
  "mapchanged_inGame",
  "mapsaved",
] as const;

export const rideActions = [
  "mazeplacetrack",
  "mazesettrack",
  "ridecreate",
  "ridedemolish",
  "rideentranceexitplace",
  "rideentranceexitremove",
  "ridefreezerating",
  "ride.ratings.calculate",
  "ridesetappearance",
  "ridesetcolourscheme",
  "ridesetname",
  "ridesetprice",
  "ridesetsetting",
  "ridesetstatus",
  "ridesetvehicle",
  "stallcreate",
  "stalldemolish",
  "stallsetname",
  "stallsetprice",
  "stallsetsetting",
  // "stallopen", // seem like potentially good for analytics, but an extension of "ridesetsetting"
  // "stallclose",
  "trackplace",
  "trackremove",
  "tracksetbrakespeed",
  "vehicle.crash",
] as const;

export const guestActions = [
  "guestsetflags",
  "guestsetname",
  "peeppickup",
  "peepsetdown",
  "guest.generated",
] as const;

export const staffActions = [
  "stafffire",
  "staffhire",
  "staffsetcolour",
  "staffsetcostume",
  "staffsetname",
  "staffsetorders",
  "staffsetpatrolarea",
] as const;

export const networkActions = [
  "networkmodifygroup",
  "network.chat",
  "network.action",
  "network.join",
  "network.leave",
  "playerkick",
  "playersetgroup",
] as const;

export const otherActions = ["balloonpress", "cheatset", "gamesetspeed", "pausetoggle"] as const;

export const parkActions = [
  "parkmarketing",
  "parksetdate",
  "parksetentrancefee",
  "parksetloan",
  "parksetname",
  "parksetparameter",
  "parksetresearchfunding",
] as const;

export const hookActions = [
  ...landscapeActions,
  ...sceneryActions,
  ...scenarioEditingActions,
  ...parkChangeActions,
  ...rideActions,
  ...guestActions,
  ...staffActions,
  ...networkActions,
  ...otherActions,
  ...parkActions,
] as const;
