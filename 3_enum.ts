// Enum позволяет лучше структурировать
// ваш код если присутствует большое количество однотипных елементов

enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];
console.log(membership); // 1
console.log(membershipReverse); // premium

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}

const social = SocialMedia.FACEBOOK;
console.log(social); // FACEBOOK
