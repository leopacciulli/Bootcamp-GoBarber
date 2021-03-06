"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _IAppointmentsRepository = _interopRequireDefault(require("../repositories/IAppointmentsRepository"));

var _IUsersRepository = _interopRequireDefault(require("../../users/repositories/IUsersRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ListAppointmentsUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('AppointmentsRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IAppointmentsRepository.default === "undefined" ? Object : _IAppointmentsRepository.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ListAppointmentsUserService {
  constructor(appointmentsRepository, usersRepository) {
    this.appointmentsRepository = appointmentsRepository;
    this.usersRepository = usersRepository;
  }

  async execute({
    user_id
  }) {
    const appointments = await this.appointmentsRepository.findAppointmentsFromUserLogged({
      user_id
    });
    const allUsers = await this.usersRepository.findAllProviders({
      except_user_id: user_id
    });
    const providers = allUsers.filter(user => user.isProvider);
    appointments.forEach(appointment => {
      providers.forEach(provider => {
        if (appointment.provider_id === provider.id) {
          appointment.provider_name = provider.name;
        }
      });
    });
    return appointments;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = ListAppointmentsUserService;
exports.default = _default;