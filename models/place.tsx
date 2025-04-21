class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {lat: 37.7749, lng: -122.4194}
    this.id = new Date().toString() + Math.random().toString();
  }
}
