type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const output: GroupsMap<T> = {};

  items.forEach((item: T) => {
    if (String(item[key]) in output) {
      output[String(item[key])].push(item);
    } else {
      output[String(item[key])] = [];
      output[String(item[key])].push(item);
    }
  });

  return output;
}
