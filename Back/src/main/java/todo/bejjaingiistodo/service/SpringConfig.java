package todo.bejjaingiistodo.service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import todo.bejjaingiistodo.repository.JdbcMemberRepository;
import todo.bejjaingiistodo.repository.memberRepository;

import javax.sql.DataSource;


@Configuration
public class SpringConfig {

    private final DataSource dataSource;

    public SpringConfig(DataSource dataSource){
        this.dataSource = dataSource;
    }
    @Bean
    public MemberService memberService(){
        return new MemberService(memberRepository());
    }

    @Bean
    public memberRepository memberRepository(){
        return new JdbcMemberRepository(dataSource);
    }
}
