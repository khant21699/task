import { User, TransformedData } from "@/types";

export const transformUserData = (users: User[]): TransformedData => {
  const result: TransformedData = {};

  users.forEach((user) => {
    const department = user.company.department;

    if (!result[department]) {
      result[department] = {
        male: 0,
        female: 0,
        ageRange: "",
        hair: {},
        addressUser: {},
      };
    }

    if (user.gender.toLowerCase() === "male") {
      result[department].male++;
    } else if (user.gender.toLowerCase() === "female") {
      result[department].female++;
    }

    const hairColor = user.hair.color;
    result[department].hair[hairColor] =
      (result[department].hair[hairColor] || 0) + 1;

    const fullName = `${user.firstName} ${user.lastName}`;
    result[department].addressUser[fullName] = user.address.postalCode;
  });

  const deptUsers: { [key: string]: number[] } = {};

  users.forEach((user) => {
    const dept = user.company.department;
    if (!deptUsers[dept]) {
      deptUsers[dept] = [];
    }
    deptUsers[dept].push(user.age);
  });

  Object.keys(result).forEach((dept) => {
    const ages = deptUsers[dept];
    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    result[dept].ageRange = `${minAge}-${maxAge}`;
  });

  return result;
};
