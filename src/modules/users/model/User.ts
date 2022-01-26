import { v4 as uuidV4 } from "uuid";

class User {
  id: uuidV4;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;
}
export { User };
