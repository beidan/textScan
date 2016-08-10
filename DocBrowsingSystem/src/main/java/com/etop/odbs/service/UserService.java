/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.etop.odbs.service;

import com.etop.odbs.beans.User;
import com.etop.odbs.dao.UserDao;

/**
 *
 * @author cjh
 */
public class UserService {
    private UserDao userDao;

    public UserDao getUserDao() {
        return userDao;
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
    
    public User load(String name, String password){
        return userDao.load(name, password);
    }
}
