package todo.bejjaingiistodo.repository;
import todo.bejjaingiistodo.domain.Member;

import java.util.List;
import java.util.Optional;

public interface memberRepository {

    Member save(Member member);
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
    List<Member> findAll();


}
