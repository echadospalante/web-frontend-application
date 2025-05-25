import env from "../../../../../../environment/environment";

export class VentureEventsApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures`;


  public static async getVentureEvents(ventureId: string): Promise<any> {}

}