const mapItem = document.querySelector('.map');

if  (mapItem) {
  const position = {
    lat: Number(mapItem.getAttribute('data-lat')),
    lng: Number(mapItem.getAttribute('data-lng')),
  };

  let map;

  async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(mapItem, {
      zoom: 12,
      center: position,
      disableDefaultUI: true,
      mapId: "DEMO_MAP_ID",
    });

    new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Uluru",
    });
  }

  // await initMap();
}
