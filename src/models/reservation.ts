import { MeetingResource } from "./meetingResource";
import { ConferenceRoom, conferenceRoomData } from "./conferenceRoom";

export class Reservation<T extends MeetingResource> {
  reservationDate!: Date;
  organizerName!: string;
  resource!: T;
  //   constructor(
  //     _reservationDate: Date,
  //     public organizerName: string,
  //     public resource: T
  //   ) {}

  requestResource(requestedResource: T, requester: string) {
    this.resource = requestedResource;
    this.organizerName = requester;
    console.log(
      `${requester} requested a reservation ${requestedResource.name}`
    );
  }
}

const teamMeeting = new Reservation<ConferenceRoom>();
teamMeeting.requestResource(conferenceRoomData[0], "Gary");
console.log(teamMeeting);
