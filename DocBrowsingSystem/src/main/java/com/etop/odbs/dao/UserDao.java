/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.etop.odbs.dao;

import com.etop.odbs.beans.User;
import com.etop.odbs.utils.MD5;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

/**
 *
 * @author cjh
 */
public class UserDao{
    private SessionFactory sessionFactory;

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
        
    }

    protected Session getSession() {
        return getSessionFactory().getCurrentSession();
    }
    
    public User load(String name,String password){
        String hql = "from User where name = :name and password = :password";
        password = new MD5().getkeyBeanofStr(password);
        System.out.println(password);
        List<User> us = this.getSession().createQuery(hql).
                setParameter("name", name).
                setParameter("password", password).list();
        if(us.isEmpty()){
            System.out.println("no us");
            return null;
        }
        return us.get(0);
    }
}
