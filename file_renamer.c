#include <stdio.h>

int main() {
  int result = rename(oldname, newname);
  if (result == 0) {
    printf("File renamed successfully.");
  } else {
    printf("File could not be renamed.");
  }
  return 0;
}