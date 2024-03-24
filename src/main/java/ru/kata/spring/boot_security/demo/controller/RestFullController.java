package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/adminApi")
public class RestFullController {
    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public RestFullController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }
    @GetMapping("/users")                                                                                  //работает
    public ResponseEntity<List<User>> printUsers() {
        List<User> userList = (List<User>) userService.findAll();
        return ResponseEntity.ok(userList);
    }

    @GetMapping("/userGet")                                                                                //работает
    public ResponseEntity<User> getUser(@RequestParam(name = "id") Long id) {
        User user = userService.getById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/userSave")                                                                              //работает
    public ResponseEntity<HttpStatus> create(@RequestBody User user) {
        userService.save(user);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    @PutMapping("/userUp")                                                                                 //работает
    public ResponseEntity<User> updateUser(@RequestBody @Valid User user) {
        userService.update(user);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @DeleteMapping("/userRemove")                                                                          //работает
    public ResponseEntity<HttpStatus> deleteUser(@RequestParam(name = "id") Long id) {
        userService.getDelete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
